$(document).ready(function () {
    $.ajax({
        url: 'https://swapi.dev/api/people/',
        type: 'GET'
    }).done(function (resp) {
        var listadoPersonajes = resp.results;
        var i = 1;
        listadoPersonajes.forEach(function (personaje) {
            var template = `<div class="col-md-6">
                                <button class="card mb-3" type="button" style="max-width: 540px;" data-bs-toggle="modal"
                                    data-bs-target="#n${i}">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">${personaje.name}</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural
                                                    lead-in to
                                                    additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>`;


            $('#lista-personajes').append(template);

            var modal = `<div class="modal" id="n${i}">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">

                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title">${personaje.name}</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <!-- Modal body -->
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <img src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt=""
                                                    width="100%">
                                            </div>
                                            <div class="col-md-9">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Altura:</th>
                                                        <td>${personaje.height}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Peso:</th>
                                                        <td>${personaje.mass}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Color de pelo:</th>
                                                        <td>${personaje.hair_color}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Color de piel:</th>
                                                        <td>${personaje.skin_color}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Color de ojos:</th>
                                                        <td>${personaje.eye_color}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cumpleaños:</th>
                                                        <td>${personaje.birth_year}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Genero:</th>
                                                        <td>${personaje.gender}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Modal footer -->
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-x-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg></button>
                                    </div>

                                </div>
                            </div>
                        </div>`;
            $('#modal-personajes').append(modal);
            i++;
        });
    })
})