<template>
    <div class="comp-dialog" v-if="isShow === true">
        <div class="dialog-box" :style="{'width': width + 'px'}">
            <div class="header">
                <a href="javascript:;" class="close" @click="hide"><span>×</span></a>
                <span class="modal-title">{{ title }}</span>
            </div>
            <div class="content">
                <slot></slot>
            </div>
            <div class="footer">
                <button type="submit"
                        class="ui-btn ui-btn--default"
                        @click="hide">{{ $t('common.comp.cancel') }}
                </button>
                <button type="submit"
                        class="ui-btn"
                        @click="submit">{{ $t('common.comp.confirm') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @file
     * @author jinguangguo
     * @date 2018/9/13 下午5:07
     */

    export default {
        name: "Modal",
        props: {
            show: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: ''
            },
            width: {
                type: Number,
                default: 450
            },
            onConfirm: {
                type: Function,
                default() {
                }
            },
            onHide: {
                type: Function,
                default() {
                }
            }
        },
        computed: {
            isShow() {
                return this.show;
            }
        },
        data() {
            return {

            };
        },
        methods: {
            submit() {
                this.onConfirm();
            },
            hide() {
                this.onHide();
            }
        }
    }
</script>

<style scoped lang="scss">
    .comp-dialog {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: $zIndex-dialog;
        background-color: rgba(0, 0, 0, 0.4);
        .dialog-box {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 4px;
            background-color: #fff;
            .header {
                padding: 24px 24px 0 24px;
                color: #666;
                .title {
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                }
                .close {
                    display: inline-block;
                    float: right;
                    margin-top: -5px;
                    line-height: 1;
                    font-size: 24px;
                    color: #666;
                    &:hover {
                        transition: all 0.4s ease;
                        /*transform: rotate(90deg);*/
                        color: $color-link-hover;
                    }
                }
            }
            .content {
                padding: 24px;
            }
            .footer {
                padding: 8px 24px 16px;
                text-align: right;
                .ui-btn {
                    height: 36px;
                    line-height: 36px;
                }
            }
        }
    }
</style>
