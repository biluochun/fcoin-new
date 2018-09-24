import commonService from '../../common/commonService'
const DEFAULT_SYMBOL_ITEM = {
    // 继承的属性
    // "price_decimal": 8,
    // "amount_decimal": 2,
    // "base_currency": "eos",
    // "quote_currency": "btc",
    // "symbol": "eosbtc",
    // "category": "main",
    // "tradeable": true,       // 是否停牌
    //
    // "name": 'eos',
    // "article_id": '',            // 对应的公告ID
    // "full_name": "CoinFi",      // 交易币种的全称
    // "logo_url": "",             // 交易币种的LOGO
    // "properties": {
    //     "level": 'BBB'      // 级别
    // },


    exchange_price: '-',
    high: "-",
    low: "-",
    price: "-",
    rate: "-",
    volumeText: '-',
    volume_number: -1,

    rate_color: ""         // 涨跌幅颜色

};
export default{
    props:{
        tabSymbol:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            tabTitle:'usdt',
            symbolList:[],//筛选展示总数据
            mainSymbolList:[],//主板数据
            foneSymbolList:[],//fone数据
            OtherList:[],
            collectionList:[]//收藏列表
        }
    },
    created(){
        //获取收藏
        this.collectionList = JSON.parse(window.localStorage.getItem('collectionList'))
        this.getInitSymbols()
        let timer = null;
        if(this.tabSymbol==='main'){
            timer = setInterval(()=>{
                this.tabTable('usdt')
                if(this.mainSymbolList.length>0){
                     clearInterval(timer)
                }
            },100)
        }else{
            timer = setInterval(()=>{
                this.tabTable('usdt')
                if(this.foneSymbolList.length>0){
                     clearInterval(timer)
                }
            },100)
        }
        
    },
    watch:{
        tabSymbol(newval,oldval){
            if(newval!==oldval){
                this.symbolList = []
                this.tabSymbol=== newval
                this.tabTable('usdt')
            }
        }
    },
    methods:{
        //设置收藏
        setCollection(item){
            if(this.collectionList.indexOf(item.symbol)==-1){
                this.collectionList.push(item.symbol)
            }else{
                let curIndex;
                this.collectionList.forEach((tag,index)=>{
                    if(tag===item.symbol){
                        curIndex = this.collectionList.indexOf(tag)
                    }
                })
                this.collectionList.splice(curIndex,1)
            }
            window.localStorage.setItem('collectionList',JSON.stringify(this.collectionList))
        },
        checkActive(cursymbol){
            return this.collectionList.indexOf(cursymbol)!==-1
        },
        //切换交易对
        tabTable(tabFlag){
            this.tabTitle = tabFlag
            if(this.tabSymbol==='main'){
                this.symbolList = []
                this._getCurrentSymbol(this.tabTitle,this.mainSymbolList)
            }else{
                this.symbolList = []
                this._getCurrentSymbol(this.tabTitle,this.foneSymbolList)        
            }
        },
         //获取数据
        getInitSymbols(){
            commonService.fetchSymbols(dataMap=>{
                //console.log(dataMap)
                this.mainSymbolList = dataMap.mainSymbolList
                this.foneSymbolList = dataMap.foneSymbolList
                //console.log(this.mainSymbolList)
                // mainSymbolList.map(item=>{
                //     if(item.quote_currency==='usdt'){
                //         this.mainUsdtList.push(item)
                //     }else if(item.quote_currency==='btc'){
                //         this.mainBtcList.push(item)
                //     }else if(item.quote_currency===''){

                //     }
                // })
            }) 
        },
        //筛选数据
        _getCurrentSymbol(curTit,toggleSymbolList){
            this.symbolList = []
            if(curTit==='selection'){
                toggleSymbolList.map(item=>{
                    if(this.collectionList.indexOf(item.symbol)!==-1){
                        this.symbolList.push(item) 
                    }
                })
            }else{
                toggleSymbolList.map(item=>{
                    if(item.quote_currency===curTit){
                        this.symbolList.push(item)                   
                    }
                    Object.assign(item, DEFAULT_SYMBOL_ITEM);
                })
            }
            
            return this.symbolList
            
        }
    },

}