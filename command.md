# Command

- Werkdefinitie: een command is een opdracht aan het register, aangeboden met de intentie daarin een verandering aan te brengen.
- Aangepast vanwege een test of twee


## Twijfel en dry-run

- Aan gegevens in een capabel register kan getwijfeld worden. Dit heeft gevolgen voor het geautomatiseerd verwerken van commando's. Systemen kunnen immers niet (altijd) (geautomatiseerd) commando's verwerken als bij het beoordelen daarvan betwijfelde gegevens betrokken zijn. Dit is niet per se een registervraagstuk. Wel een vraagstuk dat zich op dit moment veelal buiten registers - en wel binnen procesondersteunende systemen - afspeelt.

- Willen we registers en degenen die ze bedienen (beter) laten werken met betwijfelde gegevens, dan is één oplossing het aanbieden van interfaces die het mogelijk maken daarover met het register te converseren. Wanneer sprake is van twijfel over de juistheid van relevante gegevens, kan in zo'n conversatie van verwerkingsregels worden afgeweken. Mits beargumenteerd en voorzien van instructies over hoe en waar specifieke regels wel of niet moeten worden toegepast, wordt een waarschuwing of error zo dus 'overrulebaar'.

- Hieraan gerelateerd is het idee van 'dry run-functionaliteit'. Dit is een query die antwoord geeft op de vraag of een command verwerkt kan worden zonder een poging te doen dat command daadwerkelijk te verwerken.  Om verschillende uitkomsten tussen 'dry run' en daadwerkelijke registratie te voorkomen, ligt het - ondanks scheiding tussen command en query (CQRS) - voor de hand deze query te laten beantwoorden aan de commandkant van het register, waar immers ook de daadwerkelijke verwerking van het command moet plaatsvinden. 

## Transacties

Conventie (en aanbeveling?):
- Command is een opdracht die één transactie verwerkt moet worden.

...maar: business bepaalt in eerste instantie transactiegrenzen, commands sluiten daarbij aan.

...maar: digitaal werken kan innovatie in business mogelijk maken. Sneller (en sequentieel) verwerken van wijzigingen in 'echte' wereld kan bijvoorbeeld consistentiewaarborgen van aggregaatniveau naar registerniveau (dat daardoor in feite zelf aggregaat wordt?) brengen.
