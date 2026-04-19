window.eventos = {
  "2026-04-11": [
    {
      "title": "Exemplo: Sábado Letivo",
      "time": "12:35h - 18:00h",
      "description": "Aula Normal.",
      "downloads": [
         {
           "label": "Site EXEMPLO IFSP",
           "url": "https://www.ifsp.edu.br/",
         },
         {
           "label": "Araras",
           "url": "arquivos/araras.jpg"
         }
      ]
    },
  ]
};

// Lógica para forçar o recarregamento ao entrar na página ou aba suspensa
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    window.location.reload();
  }
});

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    window.location.reload();
  }
});