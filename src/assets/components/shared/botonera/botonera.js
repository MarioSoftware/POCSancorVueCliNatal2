export default {
  name: 'botonera',
  components: {},
  props: ['selection'],
  data () {
    return {
    crudTitle:'',
    modalDto:{
    Id:-1,
    Nombre:"",
    Ciudad:{
        id:-1,
        text:""
    },
    Provincia:{
        id:-1,
        text:""
    },
    Pais:{
        id:-1,
        text:""
    } 
    }
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
    this.mapDto();  

   }else {
    this.crudTitle="Eliminar persona";
   } 

  },
    mapDto(){
        if(this.selection !== null && this.selection !== undefined){
            this.modalDto.Id=this.selection[0].Id;
            this.modalDto.Nombre=this.selection[0].Nombre;
            
            this.modalDto.Ciudad.id=this.selection[0].Ciudad.Id;
            this.modalDto.Ciudad.text=this.selection[0].Ciudad.Nombre;
        
            this.modalDto.Provincia.id=this.selection[0].Ciudad.Provincia.Id;
            this.modalDto.Provincia.text=this.selection[0].Ciudad.Provincia.Nombre;
        
            this.modalDto.Pais.id=this.selection[0].Ciudad.Provincia.Pais.Id;
            this.modalDto.Pais.text=this.selection[0].Ciudad.Provincia.Pais.Nombre;
        }
    },
    closeModal: function () {
      this.$refs.modal.close();
  }
  }
}
