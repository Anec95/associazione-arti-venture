import { ActivitiesAuthor, ActivitiesQuotes } from "../styledActivities"


function ActivitiesText(props) {
    return (
        <>
            {props.title === "Artigianato" &&
                <>
                    <ActivitiesQuotes>
                        Bisogna dedicare tempo alla produzione di una qualità artigianale
                        che rinvigorisca l'immaginazione.
                    </ActivitiesQuotes>
                    <ActivitiesQuotes>
                        Queste due, qualità e immaginazione, vanno di pari passo sulla via
                        della conquista del Fuoco.
                    </ActivitiesQuotes>
                    <ActivitiesAuthor>
                        -- Mondo del Fuoco 1934, Agni Yoga
                    </ActivitiesAuthor>
                </>
                
            }
            {props.title === "Trattamenti" &&
                <>
                    <ActivitiesQuotes>
                        La conoscenza dell'energia psichica consente di applicare la giusta attenzione
                        alle medicine, cui si ricorrerà assai meno quando saranno note le terapie
                        psichiche. L'introduzione di questo genere di assistenza rinnoverà tutte le
                        manifestazioni della vita. 
                    </ActivitiesQuotes>
                    <ActivitiesAuthor>
                        -- Aum 1936, Agni Yoga
                    </ActivitiesAuthor>
                </>
            }
        </>
    )
}

export default ActivitiesText