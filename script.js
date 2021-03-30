var hora = document.querySelector('.hora');
var minuto = document.querySelector('.minuto');
var segundo = document.querySelector('.segundo');
var areaHora = document.querySelector('.area-hora');
var areaMinuto = document.querySelector('.area-minuto');
var areaSegundo = document.querySelector('.area-segundo');
var on = true;
var TimeSeconds,TimeMinutes,TimeHours;

function TemporizadorStart(){
        if(on == true){
        console.log('Start');
        var memoriaHora = ('00' + hora.value).slice(-2);
        var memoriaMinuto =  ('00' + minuto.value).slice(-2);
        var memoriaSegundo =  ('00' + segundo.value).slice(-2);
        areaHora.textContent = memoriaHora;
        areaMinuto.textContent = memoriaMinuto;
        areaSegundo.textContent = memoriaSegundo;
        TemporizadorActually();
    }
    on = false;
}

function TemporizadorActually(){
    TimeSeconds = areaSegundo.textContent;
    TimeMinutes = areaMinuto.textContent;
    TimeHours = areaHora.textContent;
    setTimeout(()=>{
    if(TimeSeconds > 0  && on == false){   
    TimeSeconds--;
    areaSegundo.textContent = ('0' + TimeSeconds).slice(-2);
    TemporizadorActually();
    }else if(TimeSeconds == 0  && on == false){
        TimeSeconds = 59;
        areaSegundo.textContent = ('0' + TimeSeconds).slice(-2);
        if(TimeMinutes > 0  && on == false){
            TimeMinutes--;
            areaMinuto.textContent = ('0' + TimeMinutes).slice(-2);
            TemporizadorActually();
        }else if(TimeMinutes == 0  && on == false){
            TimeMinutes = 59;
            areaMinuto.textContent = ('0' + TimeMinutes).slice(-2);
            if(TimeHours > 0  && on == false){
                TimeHours--;
                areaHora.textContent = ('0' + TimeHours).slice(-2);
                TemporizadorActually();
            }else if(TimeHours == 0  && on == false){
                TimeHours = 0;
                TimeMinutes = 0;
                TimeSeconds = 0;
                areaSegundo.textContent = ('0' + TimeSeconds).slice(-2);
                areaMinuto.textContent = ('0' + TimeMinutes).slice(-2);
                areaHora.textContent = ('0' + TimeHours).slice(-2);
                on = true;
            }
        }
    }
},1000);

}

function TemporizadorReset(){
    areaHora.textContent = ('0' + 0).slice(-2);
    areaMinuto.textContent = ('0' + 0).slice(-2);
    areaSegundo.textContent = ('0' + 0).slice(-2);
    TimeHours = 0;
    TimeMinutes = 0;
    TimeSeconds = 0;
    on = true;
}


var start = document.querySelector('.start');
start.addEventListener('click',TemporizadorStart,false);
var reset = document.querySelector('.reset');
reset.addEventListener('click',TemporizadorReset,false);



