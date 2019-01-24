 
 var configColumns=[
  { 
   
      title: "ID",
      field: "Id",
      visible: true
  },
  {
      title: "Nombre",
      field: "Nombre",
      visible: true,
      sort: 'asc'

  },
  {
      title: "Ciudad",
      field: "Ciudad.Nombre",
      visible: true,
      sort: 'asc'

  },
  {
      title: "Provincia",
      field: "Ciudad.Provincia.Nombre",
      visible: true,
      sort: 'asc'
  },
  {
      title: "Pais",
      field: "Ciudad.Provincia.Pais.Nombre",
      visible: true,
      sort: 'asc'
  }]
export default {
  name: 'persona-grilla',
  components: {},
  props: [],
  
  data () {
    return {
      data: [],
      configColumns: configColumns,
      select: window.NF.Table.Select.SINGLE,
      toolbar: '#myToolbar',
      mode: window.NF.Table.Mode.FULL,
      responsive: false,
      selection: null,
      IsEditing:false, 
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
      paisSource: [],
      provinciaSource: [],
      localidadSource: [], 
      selectedLocality: null,
      selectedProvince: null,
      selectedPais: null
     
        
    }
  },
  computed: {

  },
  mounted () {
    var self = this;

    self.cargarTabla(self);

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url:'https://localhost:44309/api/UserController/GetAll',
        success: function (data) {
            self.paisSource = self.modificacionVariables(data);
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
  cargarTabla(self) {
     
      $.ajax({
          type: "GET",
          dataType: "json",
          async: false,
          url: 'https://localhost:44309/api/UserController/GetAll',
          success: function (data) {
              self.data = data;
          }
      });
  },
  selectedRow() {
    this.$nextTick(() => {
        this.selection = this.$refs.ABMtable.getSelected();

        if (this.selection.length === 0) {
            this.modal = {
                Id: '',
                Nombre: '',
                Ciudad: {
                    Id: '',
                    Nombre: '',
                    Provincia: {
                        Id: '',
                        Nombre: '',
                        Pais: {
                            Id: '',
                            Nombre: ''
                        }
                    }
                }
            }
        } else {
            this.modal = this.selection[0];
        }
    });
},

updateSelectedRow() {
    this.$nextTick(() => {
        this.selection = this.$refs.ABMtable.getSelected();
    });
},

createdRow: function (row, data) {
    if (data.percentage >= 40 && data.percentage < 60) {
        $(row).addClass('success');
    }

    if (data.percentage >= 60 && data.percentage < 80) {
        $(row).addClass('warning');
    }

    if (data.percentage >= 80) {
        $(row).addClass('danger');
    }
} 

  }
  
}
