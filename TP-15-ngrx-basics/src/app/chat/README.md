1. Créer et exporter une interface ChatState dans chat.models.ts qui contient un tableau de ChatMessage 
2. Ajouter a votre AppState un attribut 'chat' de type ChatState 
3. Créer une action sendMessage qui prend en parametre les informations du message (text, from, type)
4. créer un reducer chatReducer qui a un etat initial ChatState avec unn tableau de messages vide, et qui intercepte l'action sendMessage pour ajouter le message a la liste des message du state ChatState. 
5. au niveau de reducersMapping associer le reducer créé au state 'chat'
6. au niveau de votre app.state.ts, créer un selectChatState qui selectionne le state 'chat' de l'AppState 
7. au niveau de chat.selector, créer un selector qui retourne la liste des message dans ChatState 
8. au niveau du component chat.component.ts écouter le changement de l'état des message pour les afficher au niveau de la page 
9. Ajouter au niveau de votre app.component un génerateur de messages automatique en utilisant setInterval avec un interval de 5000 ms, pour envoyer des message "fakes" via l'action sendMessage, Observer les changements au niveau de l'interface 
10. Implementer le traitement d'envoi de message a partir du champs de text dans chat.component.html,
11. Testez votre application de chat en temps réél 
