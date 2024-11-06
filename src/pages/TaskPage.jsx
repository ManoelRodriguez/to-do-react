import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

function TaskPage() {

    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navigate = useNavigate()

    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] space-y-4"></div>
            <div className="flex justify-center relative">
                <button onClick={() => navigate(-1)} className="absolute bottom-0 left-0 top-0 text-slate-100"><ChevronLeftIcon /></button>
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Detalhes da Tarefa
                </h1>
            </div>
            <div className="bg-slate-200 p-4 mt-8 rounded-md w-4/5 mx-auto">
                <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    )
}

export default TaskPage