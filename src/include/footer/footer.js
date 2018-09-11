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