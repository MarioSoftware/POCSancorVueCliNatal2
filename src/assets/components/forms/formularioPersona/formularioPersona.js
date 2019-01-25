export default {
  name: 'formulario-persona',
  components: {},
  props: ['selection'],
  data () {
    return {

        personDataDependencies:{
            modal: {
                Id: -1,
                Nombre: '',
                Ciudad: {
                    Id: -1,
                    Nombre: "",
                    Provincia: {
                        Id: -1,
                        Nombre: "",
                        Pais: {
                            Id: -1,
                            Nombre: ""
                        }
                    }
                }
            },
            paisSource:{},
            provinciaSource:{},
            localidadSource:{},
            selectedLocality: null,
                selectedProvince: null,
                selectedPais: null
            } 
    }
  },
  computed: {

  },
  mounted () {

    var self = this;
 
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url:'https://localhost:44309/api/PaisController/GetAll',
        success: function (data) {
            self.personDataDependencies.paisSource = self.modificacionVariables(data);
        }
    });

  },
  methods: { 
      
    modificacionVariables(data) {
        var entitys = [];
        for (var i = 0; i < data.length; i++) {
            var entity = { id: 0, text: "" };
            entity.id = data[i].Id;
            entity.text = data[i].Nombre;
            entitys.push(entity);
        }
        return entitys;
    },
    formSubmition() { 
  }



  }
}
 