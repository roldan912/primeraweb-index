/**
 * Voces de la Calle - Weather App Loader
 * Inicializa el widget de clima de forma independiente
 */
const WeatherApp = {
    init: function() {
        console.log("Weather System: Sincronizando con satélites...");
        this.injectWidgetEngine();
        this.initAlertSystem();
    },

    injectWidgetEngine: function() {
        const scriptId = 'weatherwidget-io-js';
        const existingScript = document.getElementById(scriptId);
        
        if (existingScript) {
            // Si el script ya existe, forzamos el re-procesamiento del widget
            if (typeof __weatherwidget_init === 'function') __weatherwidget_init();
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://weatherwidget.io/js/widget.min.js';
        script.async = true;
        document.body.appendChild(script);
    },

    initAlertSystem: function() {
        // Lógica para el sistema de alertas meteorológicas
        const alertDisplay = document.getElementById('weather-alert');
        if (alertDisplay) {
            // Simulación de nivel de alerta (Normal)
            // En una etapa futura aquí se podría integrar una API de alertas en tiempo real
            alertDisplay.innerHTML = `
                <span class="alert-icon">🛡️</span> 
                <span class="alert-text">SISTEMA ATMOSFÉRICO: SIN ALERTAS CRÍTICAS</span>
            `;
        }
    }
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => WeatherApp.init());