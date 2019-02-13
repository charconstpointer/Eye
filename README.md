Connecting to a SignalR Hub
```javascript
this.connection = new this.signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5000/chat")
  .build();
 ```
      
SignalR Event Implementation
```javascript
this.connection.on("actionName", message => {
  //Where actionName is an event name emmitted by a hub which we are connected to
});
```

 Please avoid creating unnecessary connections, instead keep already established connections alive
