//Extrato Bancário
$('#file').on('change', function () {
    console.log("OLA")
    var fileName = $(this)[0].files[0].name
    $('#input-file').val(fileName);
});

//Atos Praticados
$('#file2').on('change', function () {
    console.log("2")
    var fileName = $(this)[0].files[0].name
    $('#input-file2').val(fileName);
});

