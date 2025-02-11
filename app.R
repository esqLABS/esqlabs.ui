library(shiny)
library(esqlabs.ui)

ui <- fluidPage(
  suppressWarnings({
    esqlabs.ui::intro_screen()
  }),
  textOutput("test")
)

server <- function(input, output, session) {
  output$test <- renderText({
    "mtcars"
  })
}

shinyApp(ui = ui, server = server)
