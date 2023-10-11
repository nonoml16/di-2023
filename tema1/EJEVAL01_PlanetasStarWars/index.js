$(document).ready(function () {
    $.ajax({
        url: 'https://swapi.dev/api/planets/',
        type: 'GET'
    }).done(function (resp) {
        var listaPlanetas = resp.results;
        var i = 1;
        listaPlanetas.forEach(function (planeta) {
            var elementoLista = `<button type="button" class="list-group-item text-start" data-bs-toggle="modal"
                                    data-bs-target="#n${i}">${planeta.name}</button>`
            $('#lista-planetas').append(elementoLista);
            var modalPlaneta = `<div class="col">
                                    <div class="modal" id="#n${i}">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title">${planeta.name}</h4>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <img src="https://starwars-visualguide.com/assets/img/planets/${i}.jpg" width="100%">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
            $('#info-planeta').append(modalPlaneta);
            i++;
        });
    });
});