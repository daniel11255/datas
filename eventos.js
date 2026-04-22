window.eventos = {
  "2026-04-22": [
    {
      "title": "Entrega do Trabalho de Matemática",
      "time": "Entregar na CAE até as 13h.",
      "description": "Atividade valendo nota para fechamento do bimestre. - Entregar em folha separada à mão.",
      "type": "atividade"
    },
  ]
};

// Função para determinar a categoria do evento
window.getEventCategory = function(event) {
    const type = (event.type || '').toLowerCase();
    if (type === 'prova') return 'Próxima Prova';
    if (type === 'atividade') return 'Próxima Atividade';
    return 'Próximo Evento';
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