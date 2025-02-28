export default function ActivityPage({ params }: { params: { id: string } }) {
    return (
      <div>
        Activity {params.id}
      </div>
    )
  }