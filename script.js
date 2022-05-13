function iniciarMap(){
  var coord = {lat:-6.7818627 ,lng: -79.884146};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}



$departamento = document.querySelector("#departamento")
$provincia = document.querySelector("#provincia")
$distrito = document.querySelector("#distrito")

$ubigeo = document.querySelector("#ubigeo")

ubigeo = new Ubigeo()

//Carga Inicial
$departamento.innerHTML+= ubigeo.getDepartamento().map((dep) => {
    return `<option value="${dep.codDep}">${dep.desDep}</option>`
})
$provincia.innerHTML+= ubigeo.getProvincia().map((prov) => {
    return `<option value="${prov.codProv}">${prov.desProv}</option>`
})
$distrito.innerHTML+= ubigeo.getDistrito().map((dis) => {
    return `<option value="${dis.codDist}">${dis.desDist}</option>`
})

$ubigeo.innerHTML = $distrito.value + " - " + $departamento.options[$departamento.selectedIndex].text + " - " + $provincia.options[$provincia.selectedIndex].text + " - " + $distrito.options[$distrito.selectedIndex].text

//Eventos
$departamento.addEventListener('change', function() {
    $provincia.innerHTML= ""
    $provincia.innerHTML+= ubigeo.getProvincia(this.value).map((prov) => {
        return `<option value="${prov.codProv}">${prov.desProv}</option>`
    })
    $distrito.innerHTML= ""
    $distrito.innerHTML+= ubigeo.getDistrito(this.value+"01").map((dis) => {
        return `<option value="${dis.codDist}">${dis.desDist}</option>`
    }) 

    $ubigeo.innerHTML = $distrito.value + " - " + $departamento.options[$departamento.selectedIndex].text + " - " + $provincia.options[$provincia.selectedIndex].text + " - " + $distrito.options[$distrito.selectedIndex].text
})

$provincia.addEventListener('change', function() {
    $distrito.innerHTML= ""
    $distrito.innerHTML+= ubigeo.getDistrito(this.value).map((dis) => {
        return `<option value="${dis.codDist}">${dis.desDist}</option>`
    })
    
    $ubigeo.innerHTML = $distrito.value + " - " + $departamento.options[$departamento.selectedIndex].text + " - " + $provincia.options[$provincia.selectedIndex].text + " - " + $distrito.options[$distrito.selectedIndex].text
})

$distrito.addEventListener('change', function(){
    $ubigeo.innerHTML = $distrito.value + " - " + $departamento.options[$departamento.selectedIndex].text + " - " + $provincia.options[$provincia.selectedIndex].text + " - " + $distrito.options[$distrito.selectedIndex].text
})