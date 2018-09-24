import tableBox from '../../../component/tableBox/table-box.vue'
export default{
    name:"Ticker",
    data(){
        return{
            tabFlag:'main'
        }
    },
    created(){
        
    },
    methods:{
        // 切换主板还是fone
        toggleTicker(tabTicker){
            this.tabFlag = tabTicker
        },
       
    },
    components:{
        tableBox
    }
}