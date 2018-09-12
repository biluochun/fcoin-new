/**
 * @file
 * @author jinguangguo
 * @date 2018/9/12 下午12:49
 */

import axios from 'axios';
import ajax from './ajax';

const CATEGORY_FONE_KEY = 'fone';
const CATEGORY_MAIN_KEY = 'main';

export default {
    /**
     * 获取服务器当前时间
     * @param params
     * @returns {*}
     */
    getUnixTimestamp(params) {
        return ajax.get('/openapi/v1/tools/unix_timestamp', params);
    },

    /**
     * 币种评级
     * @param params
     * @returns {*}
     */
    getProperties(params) {
        return ajax.get('/openapi/v1/currency_properties', params)
    },

    /**
     * 机构的配置列表
     * @param params
     * @returns {*}
     */
    getCategoryConfig(params) {
        return ajax.get('/openapi/v1/categories', params)
    },

    // v2版本
    /**
     * 获取币种配置属性
     * @param params
     */
    getCurrenciesConfig(params) {
        return ajax.get('/openapi/v2/currencies', params);
    },

    /**
     * 获取交易对配置属性
     * @param params
     * @returns {*}
     */
    getSymbolConfig(params) {
        return ajax.get('/openapi/v2/symbols', params);
    },

    /**
     * 获取所有的交易区、交易对配置
     *
     * let symbolMap = {
           eosbtc: {
                "price_decimal": 8,
                "amount_decimal": 2,
                "base_currency": "eos",
                "quote_currency": "btc",
                "symbol": "eosbtc",
                "category": "main",
                "tradeable": true,       // 是否停牌

                "full_name": "CoinFi",      // 交易币种的全称
                "logo_url": "",             // 交易币种的LOGO
                "properties": {
                    "level": 'BBB'      // 级别
                }
           },
           btcusdt: {...}
        };

     let symbolList = [
     {
            "price_decimal": 8,
            "amount_decimal": 2,
            "base_currency": "eos",
            "quote_currency": "btc",
            "symbol": "eosbtc",
            "category": "main",
            "tradeable": true,       // 是否停牌

            "name": 'eos',
            "full_name": "CoinFi",      // 交易币种的全称
            "logo_url": "",             // 交易币种的LOGO
            "properties": {
                "level": 'BBB'      // 级别
            },
            "category_list": [
                {
                    category: 'fone::roaming',
                    "category_name_cn": "主板",
                    "category_name_en": "main",
                }
            ]
        },
     {...}
     ]

     let categoryMap = {
        'fone::roaming': {
            name: 'fone::roaming',
            symbols: ['ethbtc', ...]
        },
        {...}
     }

     let categoryList = [
     {
            category: 'fone::roaming',
            "category_name_cn": "主板",
            "category_name_en": "main",
            symbols: ['ethbtc', ...]
        },
     {...}
     ]

     *
     *
     * @param callback
     */
    fetchSymbols(callback) {
        axios.all([
            this.getSymbolConfig(),
            this.getProperties(),
            this.getCategoryConfig()
        ]).then(axios.spread((repSymbolConfig, repProperties, repCategoryConfig) => {

            if (repSymbolConfig.data.status !== 'ok') {
                throw new Error('api.getSymbolConfig error');
                return;
            }

            if (repProperties.data.status !== 'ok') {
                throw new Error('api.getProperties error');
            }

            if (repCategoryConfig.data.status !== 'ok') {
                throw new Error('api.repCategoryConfig error');
                return;
            }

            let repSymbolDataMap = repSymbolConfig.data.data;

            let dataCategorySymbolMap = repSymbolDataMap.category_ref;
            let dataCategoryNameList = repCategoryConfig.data.data;
            let dataCategoryMap = repSymbolDataMap.category_ref;
            let dataSymbolConfigMap = repSymbolDataMap.symbols;

            let dataLevelList = repProperties.data.data;

            let allSymbolMap = {};     // 所有
            let allSymbolList = [];    // 所有
            let mainSymbolMap = {};     // 主
            let mainSymbolList = [];    // 主
            let foneSymbolMap = {};     // fone
            let foneSymbolList = [];    // fone

            let foneCategoryMap = {};   // fone的交易区
            let foneCategoryList = [];  // fone的交易区
            let mainCategoryMap = {};   // fone的交易区
            let mainCategoryList = [];  // fone的交易区
            let allCategoryMap = {};
            let allCategoryList = [];

            // 交易区
            /*
            let categoryList = [
                {
                    category: 'fone::roaming',
                    "category_name_cn": "主板",
                    "category_name_en": "main",
                    symbols: ['ethbtc', ...]
                },
                {...}
             ]
             let categoryMap = {
                'fone::roaming': {
                    category: 'fone::roaming',
                    "category_name_cn": "主板",
                    "category_name_en": "main",
                    symbols: ['ethbtc', ...]
                }
             }
             */
            let foneCategoryConfig = getCategoryConfig(dataCategoryNameList, dataCategorySymbolMap);
            foneCategoryMap = foneCategoryConfig.foneCategoryMap;
            foneCategoryList = foneCategoryConfig.foneCategoryList;
            mainCategoryMap = foneCategoryConfig.mainCategoryMap;
            mainCategoryList = foneCategoryConfig.mainCategoryList;
            allCategoryMap =  foneCategoryConfig.allCategoryMap;
            allCategoryList =  foneCategoryConfig.allCategoryList;
            function getCategoryConfig(dataCategoryNameList, dataCategorySymbolMap) {
                let foneCategoryMap = {};
                let foneCategoryList = [];
                let mainCategoryMap = {};
                let mainCategoryList = [];
                let allCategoryMap = {};
                let allCategoryList = [];
                let item;
                let category;
                for (let i = 0, len = dataCategoryNameList.length; i < len; i++) {
                    item = dataCategoryNameList[i];
                    category = item.category;
                    if (category.indexOf(CATEGORY_FONE_KEY) >= 0) {
                        item.symbols = dataCategorySymbolMap[category];
                        item.category_suffix = category.split('::')[1];
                        foneCategoryMap[category] = item;
                        foneCategoryList.push(item);
                    } else if (category.indexOf(CATEGORY_MAIN_KEY) >= 0) {
                        item.symbols = dataCategorySymbolMap[category];
                        mainCategoryMap[category] = item;
                        mainCategoryList.push(item);
                    }
                    allCategoryMap[category] = item;
                    allCategoryList.push(item);
                }

                // for (let key in dataCategoryMap) {
                //     item = dataCategoryMap[key];
                //     if (key.indexOf(CATEGORY_FONE_KEY) >= 0) {
                //         foneCategoryMap[key] = {
                //             name: key,
                //             symbols: item
                //         };
                //         foneCategoryList.push({
                //             name: key,
                //             symbols: item
                //         });
                //     }
                // }

                return {
                    foneCategoryMap,
                    foneCategoryList,
                    mainCategoryMap,
                    mainCategoryList,
                    allCategoryMap,
                    allCategoryList
                }
            }

            // Fone交易区的交易对
            // 主交易区的交易对
            /*
            let symbolList = [
                {
                    "price_decimal": 8,
                    "amount_decimal": 2,
                    "base_currency": "eos",
                    "quote_currency": "btc",
                    "symbol": "eosbtc",
                    "category": "main",
                    "tradeable": true,       // 是否停牌

                    "name": 'eos',
                    "full_name": "CoinFi",      // 交易币种的全称
                    "logo_url": "",             // 交易币种的LOGO
                    "properties": {
                        "level": 'BBB'      // 级别
                    },
                    "category_list": [
                        {
                            category: 'fone::roaming',
                            "category_name_cn": "主板",
                            "category_name_en": "main",
                        }
                    ]
                },
                {...}
             ]
             */
            let foneSymbolConfig = getConfig(dataSymbolConfigMap);
            allSymbolMap = foneSymbolConfig.allSymbolMap;
            allSymbolList = foneSymbolConfig.allSymbolList;
            foneSymbolMap = foneSymbolConfig.foneSymbolMap;
            foneSymbolList = foneSymbolConfig.foneSymbolList;
            mainSymbolMap = foneSymbolConfig.mainSymbolMap;
            mainSymbolList = foneSymbolConfig.mainSymbolList;
            function getConfig(dataSymbolConfigMap) {
                let foneSymbolMap = {};
                let foneSymbolList = [];
                let mainSymbolMap = {};
                let mainSymbolList = [];

                let item;
                let innerItem;
                for (let key in dataSymbolConfigMap) {
                    item = dataSymbolConfigMap[key];
                    // if (item.tradeable === false) {
                    //     console.log('[tradeable] false : ' + item.symbol);
                    // }
                    allSymbolMap[key] = item;
                    allSymbolList.push(item);
                    item.category_suffix = item.category.split('::')[1];
                    if (item.category.indexOf(CATEGORY_FONE_KEY) >= 0) {
                        foneSymbolMap[key] = item;
                        foneSymbolList.push(item);
                    } else if (item.category.indexOf(CATEGORY_MAIN_KEY) >= 0) {
                        mainSymbolMap[key] = item;
                        mainSymbolList.push(item);
                    }
                    for (let i = 0, len = dataLevelList.length; i < len; i++) {
                        innerItem = dataLevelList[i];
                        if (item.base_currency === innerItem.name) {
                            Object.assign(item, innerItem);
                            break;
                        }
                    }
                }

                return {
                    allSymbolMap,
                    allSymbolList,
                    foneSymbolMap,
                    foneSymbolList,
                    mainSymbolMap,
                    mainSymbolList
                };
            }

            /*
            {
                "777eth": {
                    inFone: true,   // 是否处在fone交易区
                    categories: []
                },
                "ethbtc": ["main"]
            }
             */
            let symbolMapCategories = getSymbolCategories(dataCategorySymbolMap, allCategoryMap);
            // 配置交易对下，都具有哪些交易区
            function getSymbolCategories(dataCategorySymbolMap, allCategoryMap) {
                let results = {};
                let item;
                for (let key in dataCategorySymbolMap) {
                    item = dataCategorySymbolMap[key];
                    item.map((innerItem, index) => {
                        if (results[innerItem]) {
                            if (key.indexOf(CATEGORY_FONE_KEY) >= 0) {
                                results[innerItem]['categories'].push(allCategoryMap[key]);
                            }
                        } else {
                            results[innerItem] = {};
                            results[innerItem]['isShowCategoriesRight'] = false;
                            results[innerItem]['isShowCategoriesLeft'] = false;
                            results[innerItem]['categories'] = [];
                            if (key.indexOf(CATEGORY_FONE_KEY) >= 0) {
                                results[innerItem]['inFone'] = true;
                                results[innerItem]['categories'].push(allCategoryMap[key]);
                            }
                        }
                    });
                }
                return results;
            }

            allSymbolList.map((item, index) => {
                Object.assign(item, symbolMapCategories[item.symbol])
            });

            callback({
                allSymbolMap,
                allSymbolList,
                mainSymbolMap,     // 主
                mainSymbolList,    // 主
                foneSymbolMap,     // fone
                foneSymbolList,    // fone
                foneCategoryMap,   // fone的交易区
                foneCategoryList,  // fone的交易区
                mainCategoryMap,
                mainCategoryList
            });


        }));
    },

    _websock: null,
    _tickerDatas: {},
    _hasInit: false,
    _initCallback: null,
    _loopCallback: null,
    onLoopSocketData(callbacks) {
        if (this._websock) {
            this._websock.close();
            this._hasInit = false;
        }
        this._initWebsocket();
        this._initCallback = callbacks.initCallback;
        this._loopCallback = callbacks.loopCallback;
    },
    //初始化websocket
    _initWebsocket() {
        const wsuri = process.env.WS_URL;
        this._websock = new WebSocket(wsuri);
        this._websock.binaryType = "arraybuffer";
        this._websock.onopen = () => {
            let sub_tickers = {
                "id": 'tickers',
                "cmd": "sub",
                "args": ['all-tickers']
            };
            this._websock.send(JSON.stringify(sub_tickers));
        };
        this._websock.onmessage = (e) => {
            let currentPrice = {
                eth: '',
                btc: '',
                ft: '',
                ftbtc: ''
            };
            let raw_data = e.data;
            let data = JSON.parse(raw_data);
            let item;

            if (data.topic == 'all-tickers') {
                if (data.tickers.length > 0) {
                    for (let i = 0; i < data.tickers.length; i++) {
                        item = data.tickers[i];
                        if (item.symbol == 'ethusdt' && item.ticker[0] != null) {
                            currentPrice.eth = item.ticker[0];
                        }
                        if (item.symbol == 'btcusdt' && item.ticker[0] != null) {
                            currentPrice.btc = item.ticker[0];
                        }
                        if (item.symbol == 'ftusdt' && item.ticker[0] != null) {
                            currentPrice.ft = item.ticker[0];
                        }
                        if (item.symbol == 'ftbtc' && item.ticker[0] != null) {
                            currentPrice.ftbtc = item.ticker[0];
                        }
                        this._tickerDatas[item.symbol] = item;
                    }

                    if (this._hasInit === false) {
                        this._initCallback({
                            symbolMap: this._tickerDatas,
                            currentPrice
                        });
                        this._hasInit = true;
                    } else {
                        this._loopCallback({
                            symbolMap: this._tickerDatas,
                            currentPrice
                        });
                    }
                    $(document).trigger('$$socket', [this._tickerDatas]);
                }
            }
        };
        this._websock.onclose = this._websocketclose;
        this._websock.onerror = this._websocketerror;
    },
    _websocketopen() {//打开

    },
    _websocketonmessage(e) { //数据接收


    },
    _websocketclose() {  //关闭
        console.log("WebSocket closed");
    },
    _websocketerror() {  //失败
        console.log("WebSocket Connection failed");
    },
    closeSocket() {
        this._websock.close();
    }
}
