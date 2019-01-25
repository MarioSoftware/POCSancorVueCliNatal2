export default {
  name: 'botonera',
  components: {},
  props: ['selection'],
  data () {
    return {
    crudTitle:'',
    
    }
  },
  computed: {

  },
  mounted () {
   
     
  


  },
  methods: {
    crudAction: function (action) {
      this.$refs.modal.open();
   if(action === "c"){
    this.crudTitle="Agregar nueva persona";


   }else if(action === "r"){
    this.crudTitle="Detalles";


   }
   else if(action === "u"){
    this.crudTitle="Modificar persona";


   }else {
    this.crudTitle="Eliminar persona;"


   } 

  },

  closeModal: function () {
      this.$refs.modal.close();
  }
  }
}
