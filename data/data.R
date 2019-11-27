library(dplyr)
library(stringr)

fps <- list.files('/Users/lenoxcyy13/Desktop/data/data', full.names = T)

x <- vector('character', length(fps))

for(i in seq_along(fps)){
  x[i] <- readLines(fps[i])
}

y <- str_split(x, ',', simplify = F)
data <- matrix(Reduce(c,y), ncol = 5, byrow = TRUE)
colnames(data) <- c('eventUser','eventName','eventDescription','eventDate','eventTime')
data <- as_tibble(data)

mt <- data %>%
  select(eventDate, eventTime) %>%
  group_by(eventDate) %>%
  arrange(eventTime)

#建立一個list, meeting$(eventDate)$eventTime依序
meet <- list("03/12/2019" = "08:00", "3/13/2019" = c("08:00", "09:00"), "06/12/2019" = "10:00")
#build a vector name timeline <- c(24hours)
timeline <- c('00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', 
              '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', 
              '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00')
#compare two vector and output the time (ignore the overlapping ones)
timeline[!timeline%in%meet$`03/12/2019`]


