export default {
  name: 'formulario-persona',
  components: {} ,
  props:["modal"],
  data() {
    return {


     Localmodal:{Nombre:""},
      paisSource: {},
      provinciaSource: {},
      localidadSource: {},
      selectedProvince: {},
      selectedPais: {},
      selectedLocality: {},

    }
  },
  computed: {

  },
  mounted() {
    var self = this;
    $.ajax({
      type: "GET",
      dataType: "json",
      async: false,
      url: 'https://localhost:44309/api/PaisController/GetAll',
      success: function (data) {
        self.paisSource = self.modificacionVariables(data);
      }
    });
   
  },
  watch: { 

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
        var entity = {
          id: 0,
          text: ""
        };
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