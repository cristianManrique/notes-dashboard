import NoteBoard from '@/components/Board/NoteBoard'
import AddNoteForm from '@/components/Forms/AddNoteForm'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <AddNoteForm />
      <NoteBoard />
    </div>
  )
}
