<template>
    <div class="comp-popover">
        <span ref="trigger" class="popover-trigger">
            <slot></slot>
        </span>
        <div ref="popover"
             v-show="show"
             class="popover-body"
             :style="{'width': width === 'auto'? 'auto' : width + 'px'}">
            <h3 class="title" v-if="title">
                <slot name="title">{{title}}</slot>
            </h3>
            <div class="content">
                <slot name="content">{{content}}</slot>
            </div>
            <div class="popover-body-bottom"></div>
        </div>
        <div class="arrow" v-show="show" :class="placement" ref="arrow"></div>
    </div>
</template>

<script type="text/babel">
    import $ from 'jquery'

    /**
     * @example
     <popover placement="bottom" title="市价" content="这里是tip的内容哦" trigger="hover">
     <button class="ui-btn ui-btn--default">1</button>
     </popover>
     */

    const OFFSET_LEFT = 20;

    export default {
        props: {
            relative: {
                type: Boolean,
                default: false
            },
            trigger: {
                type: String,
                default: 'click'
            },
            title: {
                type: String
            },
            content: {
                type: String
            },
            placement: {
                type: String,
                default: 'bottom'
            },
            width: {}
        },
        data() {
            return {
                position: {
                    top: -99999,
                    left: -99999
                },
                show: false
            }
        },
        mounted() {
            let $trigger = $(this.$refs.trigger);
            let $popover = $(this.$refs.popover);
            let $arrow = $(this.$refs.arrow);

            this.$trigger = $trigger;

            // 测试时，使用click事件
            // $trigger.on('click', (e) => {
            //     this.toggle(e);
            // });
            // return;

            $trigger.on('mouseenter', (e) => {
                this.showPopover();
                $popover.off('mouseenter').on('mouseenter', (e) => {
                    this.showPopover();
                });
                $popover.off('mouseleave').on('mouseleave', (e) => {
                    this.hidePopover();
                });
                $arrow.off('mouseenter').on('mouseenter', (e) => {
                    this.showPopover();
                });
                $arrow.off('mouseleave').on('mouseleave', (e) => {
                    this.hidePopover();
                });
            });

            $trigger.on('mouseleave', (e) => {
                this.hidePopover();
            });

            // 移动到菜单面板的时候，禁止隐藏面板

        //    $popover.on('mouseenter', (e) => {
        //        e.stoppropagation();
        //    });

        //    $(document.body).on('mouseenter', $popover, (e) => {
        //        console.log('$popover...');
        //        e.stopPropagation();
        //    });
        },
        methods: {

            _setPositionAbsolute() {
                const popover = this.$refs.popover;
                const trigger = this.$refs.trigger.children[0];
                const arrow = this.$refs.arrow;

                let arrowLeft;
                let arrowTop;

                let $trigger = $(trigger);
                let $arrow = $(arrow);
                let $popover = $(popover);

                switch (this.placement) {
                    case 'top' :
                        this.position.left = $trigger.offset().left - $popover.width() / 2 + $trigger.width() / 2;
                        this.position.top = $trigger.offset().top - $popover.height() - (arrow.offsetHeight || 6);

                        arrowLeft = $trigger.offset().left + $trigger.width() / 2;
                        arrowTop = $trigger.offset().top - (arrow.offsetHeight || 6);
                        break;
                    case 'bottom':
                        this.position.left = $trigger.offset().left + $trigger.width() / 2 - OFFSET_LEFT;
                        this.position.top = $trigger.offset().top + $trigger.height() + (arrow.offsetHeight || 6);

                        arrowLeft = $trigger.offset().left + $trigger.width() / 2 - (arrow.offsetWidth || 12) / 2;
                        arrowTop = $trigger.offset().top + $trigger.height();

                        break;
                    case 'leftbottom':
//                        window.originAlert($arrow.is(':hidden'));
//                        window.originAlert((arrow.offsetHeight || 6));
                        this.position.left = $trigger.offset().left + $trigger.width() / 2 + OFFSET_LEFT - $popover.width();
                        this.position.top = $trigger.offset().top + $trigger.height() + (arrow.offsetHeight || 6);

                        arrowLeft = $trigger.offset().left + $trigger.width() / 2 - (arrow.offsetWidth || 12) / 2;
                        arrowTop = $trigger.offset().top + $trigger.height();
                        break;
                    default:
                        console.warn('Wrong placement prop')
                }

                $popover.css({
                    top: this.position.top + 'px',
                    left: this.position.left + 'px'
                });

                $arrow.css({
                    top: arrowTop + 'px',
                    left: arrowLeft + 'px'
                });
            },

            _setPositionRelative() {
                const popover = this.$refs.popover;
                const trigger = this.$refs.trigger.children[0];
                const arrow = this.$refs.arrow;

                let arrowLeft;
                let arrowTop;

                switch (this.placement) {
                    case 'top' :
                        this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
                        this.position.top = trigger.offsetTop - popover.offsetHeight - (arrow.offsetHeight || 6);

                        arrowLeft = trigger.offsetLeft + trigger.offsetWidth / 2 - (arrow.offsetWidth || 12) / 2;
                        arrowTop = trigger.offsetTop - (arrow.offsetHeight || 6);
                        break;
                    case 'bottom':

                        this.position.left = trigger.offsetLeft + trigger.offsetWidth / 2 - OFFSET_LEFT;
                        this.position.top = trigger.offsetTop + trigger.offsetHeight + (arrow.offsetHeight || 6);

                        arrowLeft = trigger.offsetLeft + trigger.offsetWidth / 2 - (arrow.offsetWidth || 12) / 2;
                        arrowTop = trigger.offsetTop + trigger.offsetHeight;

                        break;
                    case 'leftbottom':
                        this.position.left = trigger.offsetLeft + trigger.offsetWidth / 2 + OFFSET_LEFT - popover.offsetWidth;
                        this.position.top = trigger.offsetTop + trigger.offsetHeight + (arrow.offsetHeight || 6);

                        arrowLeft = trigger.offsetLeft + trigger.offsetWidth / 2 - (arrow.offsetWidth || 12) / 2;
                        arrowTop = trigger.offsetTop + trigger.offsetHeight;

                        break;
                    default:
                        console.warn('Wrong placement prop')
                }

                popover.style.top = this.position.top + 'px';
                popover.style.left = this.position.left + 'px';

                arrow.style.top = arrowTop + 'px';
                arrow.style.left = arrowLeft + 'px';

            },

            toggle(e) {
                // debugger
                // if (e && this.trigger === 'contextmenu') {
                //     e.preventDefault();
                // }
//                if (!(this.show = !this.show)) {
//                    return;
//                }
                this.show = !this.show;

                setTimeout(() => {
                    if (this.relative === true) {
                        this._setPositionRelative();
                    } else {
                        this._setPositionAbsolute();
                    }
                }, 0);
            },

            showPopover() {
                this.$trigger.addClass('popover-trigger--hover');
                this.show = true;
                setTimeout(() => {
                    if (this.relative === true) {
                        this._setPositionRelative();
                    } else {
                        this._setPositionAbsolute();
                    }
                }, 0);
            },

            hidePopover() {
                this.$trigger.removeClass('popover-trigger--hover');
                this.show = false;
            }
        },
        beforeDestroy() {
            this.$trigger.off();
        }
    }
</script>

<style lang='less' scoped>
    @import "../assets/css/base";
    .comp-popover {
        .arrow {
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            box-sizing: border-box;
            border-color: transparent;
            border-style: solid;
            border-width: 6px;
            z-index: 10;
            &:after {
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                box-sizing: border-box;
                border-color: transparent;
                border-style: solid;
                border-width: 6px;
                content: " ";
            }
            &.top {
                bottom: -7px;
                left: 50%;
                transform: translate(-50%, 0);
                border-bottom-width: 0;
                border-top-color: #999;
                border-top-color: rgba(0, 0, 0, .25);
                &:after {
                    bottom: 1px;
                    border-width: 7px;
                    margin-left: -7px;
                    border-bottom-width: 0;
                    border-top-color: #fff;
                }
            }
            &.bottom,
            &.leftbottom {
                top: -7px;
                left: -9999em;
                border-top-width: 0;
                border-bottom-color: #999;
                border-bottom-color: rgba(0, 0, 0, .25);
                &:after {
                    top: 1px;
                    border-width: 7px;
                    margin-left: -7px;
                    border-top-width: 0;
                    border-bottom-color: #fff;
                }
            }
        }

        .popover-trigger {
            /*display: inline-block;*/
            /*vertical-align: top;*/
            .icon, .icon-info {
                margin-right: 2px;
            }
            .text {
                vertical-align: middle;
            }
        }
        .popover-body {
            position: absolute;
            top: -9999em;
            left: -9999em;
            z-index: 10;
            width: 320px;
            border: 1px solid rgba(0, 0, 0, .2);
            border-radius: 4px;
            box-shadow: 1px 1px 5px rgba(125, 125, 125, 0.04);
            background-color: #fff;
            font-size: 12px;
            
            .content {
                padding: 4px 16px;
                line-height: 2;
                border-radius: 4px;
                color: #999;

                .popover-con {
                    padding: 10px 16px;
                    // padding: 24px 16px;
                    box-sizing: border-box;
                    text-align: center;
                    .popover-con-properties {
                        display: inline-block;
                        width: 80px !important;
                        padding: 0 !important;
                        height: 40px;
                        line-height: 40px;
                        margin: 0 auto;
                        border-radius: 8px;
                        font-size: 20px;
                        color: #fff;
                    }
                    .popover-con-text {
                        text-align: center;
                        margin-top: 12px;
                        font-size: 12px;
                        line-height: 20px;
                        // color: #4a6b7b;
                        color: #666;
                        word-break: break-all;
                        word-wrap: break-word;
                        
                    }
                    .popover-con-link {
                        color: #00b07c;
                        font-size: 18px;

                    }
                }
                .popover-bottom-title {
                    text-align: center;
                    font-size: 12px;
                    line-height: 18px;
                    padding-bottom: 10px;
                    .popover-bottom-link {
                        color: #00b07c !important;
                        text-decoration: none !important;
                    }
                }
            }
            
            .popover-body-bottom {
                position: absolute;
                width: 100%;
                background-color: #000;
                opacity: 0;
                height: 5px;
            }
            .title {
                height: 32px;
                line-height: 32px;
                padding-left: 16px;
                color: #666;
                border-bottom: 1px #e6e6e6 solid;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-all;
                font-size: 12px;
                border-radius: 4px 4px 0 0;
                text-align: left;
            }
        }
    }
</style>
