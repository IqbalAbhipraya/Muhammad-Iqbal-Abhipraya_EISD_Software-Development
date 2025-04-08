//soal 3 tentang mencari siapa yang mencari kue
function searchThief(guestList, haveCakePhoto) {
    if (!guestList.includes(haveCakePhoto)) {
        return "Tidak bisa dicari pelakunya";
    }

    let suspect = guestList.slice(guestList.indexOf(haveCakePhoto)+1);
    
    if (suspect.length === 1){
        return "Yang paling mungkin mengambil kue adalah " + suspect[0];
    }else {
        return "Tidak bisa dicari pelaku yang paling mungkin";
    }
}

guest = ["Ningguang", "Hutao", "Xiao", "Childe"];

console.log(searchThief(guest, "Xiao"));