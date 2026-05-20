const ctx =
        document.getElementById('stockChart');

        new Chart(ctx, {

            type: 'line',

            data: {

                labels: [
                    'Jun',
                    'Jul',
                    'Agu',
                    'Sep',
                    'Okt',
                    'Nov'
                ],

                datasets: [

                    {
                        label: 'UNVR',

                        data: [
                            1359,
                            1653,
                            1643,
                            1721,
                            2494,
                            2513
                        ],

                        borderWidth: 3
                    },

                    {
                        label: 'SIDO',

                        data: [
                            460,
                            475,
                            485,
                            499,
                            522,
                            508
                        ],

                        borderWidth: 3
                    }

                ]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {
                        position: 'top'
                    }

                }

            }

        });
