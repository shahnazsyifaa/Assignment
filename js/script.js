function hitungLuas(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

function hitungKeliling(sisiA, sisiB, sisiC) {
    return sisiA * sisiB * sisiC;
}

function showContainerLuas() {
    document.getElementById('container-luas').style.display = 'block';
    document.getElementById('container-keliling').style.display = 'none';
}

function showContainerKeliling() {
    document.getElementById('container-keliling').style.display = 'block';
    document.getElementById('container-luas').style.display = 'none';
}

function luasButton() {
    var containerA = document.getElementById("container-luas");
    var containerB = document.getElementById("container-keliling");

    if (containerA.style.display === 'none') {
        showContainerLuas();
    }
}

function kelilingButton() {
    var containerA = document.getElementById("container-luas");
    var containerB = document.getElementById("container-keliling");

    if (containerB.style.display === 'none') {
        showContainerKeliling();
    }
}

function hitungLuasBtn() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (alas !== null && tinggi !== null) {
        hasil = hitungLuas(alas, tinggi);
        document.getElementById("output").value = hasil;
	}
		
}

function hitungKelilingBtn() {
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    if (sisiA !== null && sisiB !== null && sisiC !== null) {
        hasil = hitungKeliling(sisiA, sisiB, sisiC);
        document.getElementById("outputKeliling").value = hasil;
	}
		
}

function resetBtn(){
    document.getElementById("output").value = "0";
    document.getElementById("outputKeliling").value = "0";
    document.getElementById("alas").value = "0";
    document.getElementById("tinggi").value = "0";
    document.getElementById("sisiA").value = "0";
    document.getElementById("sisiB").value = "0";
    document.getElementById("sisiC").value = "0";
}

