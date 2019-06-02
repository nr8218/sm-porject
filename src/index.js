const express = require('express')
const path = require('path')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 4000

//Static Files and Paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//app setting 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))
app.use(express.json)

app.listen(port, () => {
    console.log('Server is up and running on ' + port + '.')
})