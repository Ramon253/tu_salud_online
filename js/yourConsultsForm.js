function showRecord() {
    let records = document.getElementById("Records")
    let button = document.getElementById("ShowRecordButton")
    if (records.style.display === "none") {
        records.style.display = "flex"
        button.innerText = "Ocultar historial"
    }
    else {
        button.innerText = "Ver historial"
        records.style.display = "none"
    }
}