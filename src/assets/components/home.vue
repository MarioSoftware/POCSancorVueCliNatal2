<template> 
<div>
<div id="inicioPanel" class="jumbotron text-center txtWhite">
  <h1>C.L.E.S centralized</h1>
  <p>el sistema de Control y logistica de entidades sociales.</p> 
</div>

<div class="container txtWhite">
  <div class="row">
    <div class="col-sm-4">
      <h3>Personas</h3>
      <p>Relaciones</p>
      <p>Contactos</p>
       <p>Sitos de frecuencia y mas..</p>
    </div>
    <div class="col-sm-6">
      <h3>Automotores</h3>
      <p>Logistica de movimientos..</p>
      <p>Historial de rentas y mucho mas..</p>
    </div>
    
  </div>
</div>
</div>
</template>
<script>
export default {
    
}
</script>

<style>
.txtWhite{ 
  color:white;
}
#inicioPanel {
  background-color: teal;
  opacity:0.8;
  transition:opacity 0.5s linear;
}
#inicioPanel:hover {
  opacity:1; 
}
</style>

