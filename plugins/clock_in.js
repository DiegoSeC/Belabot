
casper.start('http://200.55.21.162:50180/SistemaHorarios2012/', function() {    
    this.fill('form[action="/SistemaHorarios2012/"]', { EmployeeDni: '41975373' }, false);
    this.capture('google.png', {
        top: 100,
        left: 100,
        width: 500,
        height: 400
    });
    this.mouseEvent('click','#enter');
});

casper.then(function() {
    this.capture('step2.png', {
        top: 100,
        left: 100,
        width: 500,
        height: 400
    });
});


casper.open('http://200.55.21.162:50180/SistemaHorarios2012/', {
    method: 'post',
    data:   {
        'EmployeeDni': '41975373',
        'RememberMe':  ''
    }
});

lastRegistry = casper.then(function() {
    this.echo('POSTED it.');
        this.capture('step3.png', {
        top: 0,
        left: 0,
        width: 1500,
        height: 1400
    });
      
      	var lastRegistryPath = 'table.seccion2 tr:nth-child(2)';        

        var lastRegistry = this.fetchText(lastRegistryPath);
        this.lastRegistry = lastRegistry;     
        this.echo( '//'+lastRegistry+'//') ;        
        

        this.echo(' existe? ' + this.exists(lastRegistryPath));
});
