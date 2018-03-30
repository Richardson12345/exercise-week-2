var peran = 'Ksatria'
var nama = 'Richard'

if ( peran == '' && nama == '' ){
    console.log('Nama harus diisi!');
}else if(name != '' && peran == '') {
    console.log('Halo '+ nama + ', Pilih peranmu untuk memulai game!');
}else if(name != '' && peran == 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia ' + nama + '\n Halo ' 
              + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!' );
}else if(name != '' && peran == 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia ' + nama + '\n Halo ' 
              + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka' );
}else if(name != '' && peran == 'Penyihir' ){
    console.log('Selamat datang di Dunia Proxytia ' + nama + '\n Halo ' 
              + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!' );
}else{
    console.log('silahkan ulang lagi');
}