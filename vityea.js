/*
    ##############################################################
    # vityea.js                                                  #
    # Designed by Vityea.                                        #
    # Version v1.0 Published Date: Sunday 25, June 2023. 7:23 PM #
    ##############################################################
*/

(() => {
    console["log"]("%cvityea.js", "font-weight: bold;")
    console["log"]("Designed & Coded by Vityea.")
})

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.classList.add('light-mode');
    }
})

