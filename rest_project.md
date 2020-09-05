const router = express.Router();

- requres the ability to use seperate routers

method-override middleware

- allows you to delete, patch, etc
- these commands are not built in to express

app.use(methodOverride((request, response) => {
if (request.body && request.body.\_method) {
const method = request.body.\_method;
return method;
}
})
);
