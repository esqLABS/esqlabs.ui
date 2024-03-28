library(shiny)
library(esqlabs.ui)
library(tidyverse)

ui <- fluidPage(
  esqlabs.ui::intro_screen(),
  tableOutput("test")
)

server <- function(input, output, session) {
  output$test <- renderTable({
    mtcars
  })
}

shinyApp(ui = ui, server = server)
