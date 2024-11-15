var txt, name

txt = "Вы любите Жену?"
name = prompt(txt)
messag(name)

function messag(name)
{
    if(name!="Да")
        {
            txt = "Подумайте ещё! Вы любите Жену?"
            name = prompt(txt)
            messag(name)
        }
        else
        {
            document.write("Ура! Вы любите жену!<br \/>")
            document.write("Ваша жена:<br \/>")    
            document.write('<img src="Dasha.jpg" width = "360" height = "540"><br>')
        }
    
}
