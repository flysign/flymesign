app.dialogs={init:function(){$(".d-share").click(function(){return $(this).fadeOut(300),!1}),$(".d-success-btn-get").click(function(){return app.showDialog("confirm"),!1}),$(".d-confirm-btn-ok,.d-confirm").click(function(){return app.closeDialog("confirm"),!1})}};