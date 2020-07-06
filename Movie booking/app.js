const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
populateUI();
// save selected movie index and price
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
    
}
// update total count 
function updatedSelectedCount(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeat].map(seat=> [...seats].indexOf(seat));

    localStorage.setItem('selectedSeat', JSON.stringify(seatsIndex));

    const selectedSeatCounts = selectedSeat.length;
    count.innerText = selectedSeatCounts;
    total.innerText = selectedSeatCounts * ticketPrice;
}
// pupulate ui 
function populateUI(){
    const selectedSeat = JSON.parse(localStorage.getItem('selectedSeat'));
    if (selectedSeat!==null && selectedSeat.length>0){
        seats.forEach((seat,index) => {
            if(selectedSeat.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}
// select event listener 
movieSelect.addEventListener('change',e=>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updatedSelectedCount();
})
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updatedSelectedCount();
    }
})

// initial count and total 
updatedSelectedCount();

ticketPrice.array.forEach(element => {
    
});