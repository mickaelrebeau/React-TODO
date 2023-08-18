export default function Home() {
    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 mt-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div className="text-left">
                        <h2 className="text-2xl font-bold tracking-tight">Welcome!</h2>
                        <p className="text-muted-foreground">
                        Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
} 