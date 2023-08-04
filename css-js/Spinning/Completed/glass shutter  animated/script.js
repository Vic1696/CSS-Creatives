            const rangeInput = document.querySelector('.range');
            const rangeValue = document.getElementById('rangeValue');
            const fillRangeTopLeft = document.getElementById('fillRangeTopLeft');
            const fillRangeTopRight = document.getElementById('fillRangeTopRight');
            const fillRangeBottomLeft = document.getElementById('fillRangeBottomLeft');
            const fillRangeBottomRight = document.getElementById('fillRangeBottomRight');

            const animationDuration = 5000; 
            const steps = 100; 

            function animateGlassShutter() {const rangeInput = document.querySelector('.range');
            const rangeValue = document.getElementById('rangeValue');
            const fillRangeTopLeft = document.getElementById('fillRangeTopLeft');
            const fillRangeTopRight = document.getElementById('fillRangeTopRight');
            const fillRangeBottomLeft = document.getElementById('fillRangeBottomLeft');
            const fillRangeBottomRight = document.getElementById('fillRangeBottomRight');
            
            const animationDuration = 5000;
            const steps = 100;
            
            function animateGlassShutter() {
                let currentValue = parseInt(rangeInput.value);
                const targetValue = parseInt(rangeInput.max);
                const increment = (targetValue - currentValue) / steps;
            
                const animationInterval = setInterval(() => {
                    currentValue += increment;
                    rangeInput.value = currentValue;
                    animateGlassShutterHelper();
            
                    if (currentValue >= targetValue) {
                        clearInterval(animationInterval);
                        setTimeout(() => {
                            animateOutGlassShutter();
                        }, animationDuration);
                    }
                }, animationDuration / steps);
            }
            
            function animateOutGlassShutter() {
                let currentValue = parseInt(rangeInput.value);
                const targetValue = parseInt(rangeInput.min);
                const increment = (currentValue - targetValue) / steps;
            
                const animationInterval = setInterval(() => {
                    currentValue -= increment;
                    rangeInput.value = currentValue;
                    animateGlassShutterHelper();
            
                    if (currentValue <= targetValue) {
                        clearInterval(animationInterval);
                    }
                }, animationDuration / steps);
            }
            
            function animateGlassShutterHelper() {
                const value = parseInt(rangeInput.value);
                const blur = 100 - value;
                rangeValue.innerHTML = value;
            
                fillRangeTopLeft.style.width = blur / 2 + '%';
                fillRangeTopRight.style.height = blur / 2 + '%';
                fillRangeBottomLeft.style.height = blur / 2 + '%';
                fillRangeBottomRight.style.width = blur / 2 + '%';
            }
            
            setInterval(() => {
                animateGlassShutter();
            }, 10000); 
                let currentValue = parseInt(rangeInput.value);
                const targetValue = parseInt(rangeInput.max);
                const increment = (targetValue - currentValue) / steps;

                const animationInterval = setInterval(() => {
                    currentValue += increment;
                    rangeInput.value = currentValue;
                    animateGlassShutterHelper();

                    if (currentValue >= targetValue) {
                        clearInterval(animationInterval);
                        setTimeout(() => {
                            animateOutGlassShutter();
                        }, animationDuration);
                    }
                }, animationDuration / steps);
            }

            function animateOutGlassShutter() {
                let currentValue = parseInt(rangeInput.value);
                const targetValue = parseInt(rangeInput.min);
                const increment = (currentValue - targetValue) / steps;

                const animationInterval = setInterval(() => {
                    currentValue -= increment;
                    rangeInput.value = currentValue;
                    animateGlassShutterHelper();

                    if (currentValue <= targetValue) {
                        clearInterval(animationInterval);
                    }
                }, animationDuration / steps);
            }

            function animateGlassShutterHelper() {
                const value = parseInt(rangeInput.value);
                const blur = 100 - value;
                rangeValue.innerHTML = value;

                fillRangeTopLeft.style.width = blur / 2 + '%';
                fillRangeTopRight.style.height = blur / 2 + '%';
                fillRangeBottomLeft.style.height = blur / 2 + '%';
                fillRangeBottomRight.style.width = blur / 2 + '%';
            }

            animateGlassShutter();
