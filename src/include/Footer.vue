<template>
    <footer>
       <div class="container fn-clearfix">
           <div class="container-new fn-clearfix">
               <div class="footer-logo">
                   <a href="/">
                    <img src="../img/logo-white.svg" alt="">
                   </a>
                   <p>币市有风险，投资需谨慎</p>
               </div>
               <div class="footer-new">
                   <dl>
                       <dt>服务</dt>
                       <dd><a href="#">交易中心</a></dd>
                       <dd><a href="">帮助中心</a></dd>
                       <dd><a href="">提交请求</a></dd>
                   </dl>
                   <dl>
                       <dt>工具</dt>
                       <dd> <a href="">App下载</a></dd>
                       <dd> <a href="">API文档</a></dd>
                   </dl>
                   <dl>
                       <dt>条款说明</dt>
                       <dd> <a href="">隐私政策</a></dd>
                       <dd> <a href="">用户协议</a></dd>
                       <dd> <a href="">手续费</a></dd>
                   </dl>
                   <dl>
                       <dt>关于我们</dt>
                       <dd><a href="">关于FCoin</a></dd>
                       <dd><a href="">客户支持</a></dd>
                       <dd><a href="">联系我们</a></dd>
                   </dl>
               </div>
            </div>  
            <div class="footer-community fn-clearfix">
                <a href="#"><i class="icon-reddit"></i></a>
                <a href="javascript:;" @mouseover="toggle_language('show')" @mouseout="toggle_language('hide')">
                    <i></i>
                    <div class="language" ref="toggle_box">
                        <span @click="toggle_current('English')">English</span>
                        <span @click="toggle_current('中文')">中文</span>
                    </div>
                </a>
                <a href="#"><i></i></a>
                <a href="#"><i></i></a>
                <a href="#"><i></i></a>
                <a href="#"><i></i></a>
                <p>Copyright © 2018 FCoin</p>
            </div>  
       </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        created() {
            
        },
        methods: {
            toggle_language(tollge){
                if(tollge=='show'){
                    this.$refs.toggle_box.style.display = 'block'
                }else{
                    this.$refs.toggle_box.style.display = 'none'
                }
                
            },
            toggle_current(flag){
                this.$refs.toggle_box.style.display = 'none'
                console.log(flag)

            }
        },
    };
</script>
<style lang="scss">
footer{
    width: 100%;
    background: #2f3d45;
    height: 410px;
    .container{
        width: 1200px;
        margin:0 auto;
        .container-new{
            padding:60px 0 30px 0;
            border-bottom:1px solid #5C656B;
            .footer-logo{
                float: left;
                width: 245px;
                a{
                    width: 130px;
                    height: 35px;
                    display: inline-block;
                }
                p{
                    font-family: 'MicrosoftYaHei';
                    font-size: 12px;
                    color: #737C80;
                    margin-top:50px;
                }
            }
            .footer-new{
                float: left;
                dl{
                   float: left;
                   margin-left:186px;
                    dt{
                        margin-bottom:24px;
                        font-size: 14px;
                        color: #E9E9E9;
                    }
                    dd{
                        height: 30px;
                        line-height: 30px;
                        color:#737c80;
                        a{
                            color:#737c80;
                            &:hover{
                                color:#E9E9E9;
                            }
                        }
                    }
                }
            }
        }
        .footer-community{
            padding-top:60px;
            text-align: center;
            a{
                width: 60px;
                height: 60px;
                margin:0 20px;
                background: #5C656B;
                display: inline-block;
                border-radius: 50%;
                text-align: center;
                line-height: 60px;
                position: relative;
                &:hover{
                    background: #fff;
                }
                .language{
                    width: 122px;
                    height: 82px;
                    border:1px solid #14181C;
                    position: absolute;
                    bottom:60px;
                    left:50%;
                    margin-left:-60px;
                    background: #2F3D45;
                    display: none;
                    span{
                        float: left;
                        width: 102px;
                        height: 41px;
                        text-align: left;
                        line-height: 40px;
                        padding-left:20px;
                        color:#E9E9E9;
                        &:hover{
                            background: #14181c;
                        }
                    }

                }
            }
            p{
                padding-top: 24px;
                color:#737C80;
                font-size: 14px;
            }
        }
    }
}

</style>

