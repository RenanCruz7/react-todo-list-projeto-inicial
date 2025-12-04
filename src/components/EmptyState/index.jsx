import './empty-state.style.css'

export function EmptyState() {
    return (
        <section className="empty-state">
            <p>Ainda não há tarefas cadastradas.</p>
            <img src="/empty.png" alt="Empty state illustration"></img>
        </section>
    )
}