export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tema" element={<SwitchTheme />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/tasks" element={<Tasks />} />
        </Routes>
    )
}