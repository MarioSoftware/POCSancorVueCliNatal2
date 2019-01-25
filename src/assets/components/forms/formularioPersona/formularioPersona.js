export default {
  name: 'formulario-persona',
  components: {},
  props: ['selection'],
  data () {
    return {
     
       
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
            selectedProvince: {},
            selectedPais: {},            
            selectedLocality: {},
         
    }
  },
  computed: {

  },
  mounted () {
    window.checkPaisSelected = function () {
        return Boolean(this.selectedPais);
    }.bind(this);
    var self = this;
 
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url:'https://localhost:44309/api/PaisController/GetAll',
        success: function (data) {
            self.paisSource = self.modificacionVariables(data);
        }
    });

  },
  watch:{
     selectedPais: function (newVal) { 
        if (newVal === null)
            return;
        this.filtroPaisPorProvincia(newVal); 
        
        if (!this.IsEditing) { 
            this.selectedLocality = null;
            this.localidadSource = [];
        }

        if (this.localidadSource != null && this.localidadSource.length > 0)
        {
            this.IsEditing = true;
        }
        
        this.filtroPaisPorProvincia(newVal);
    },



  },
  methods: { 
    filtroPaisPorProvincia(newVal) {
        $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            url: 'https://localhost:44309/api/ProvinciaController/GetProvinciasPorPais/' + newVal.id,
            success: function (data) {
                this.provinciaSource = this.modificacionVariables(data);
            }
        });
    },
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
 