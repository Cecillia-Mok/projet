"use client"

import Button from "./button"


interface User {
  id: number
  name: string
  email: string
  status: "Active" | "Inactive"
  avatar: string
}

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const handleEdit = () => {
    console.log("Edit user:", user.id)
  }

  const handleDelete = () => {
    console.log("Delete user:", user.id)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="w-full shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 relative flex shrink-0 overflow-hidden rounded-full">
            <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="aspect-square h-full w-full" />
            <div className="bg-blue-100 text-blue-600 font-medium flex h-full w-full items-center justify-center rounded-full bg-muted">{getInitials(user.name)}</div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 truncate">{user.name}</h3>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
            <div className="mt-2">
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <Button text="Modifier" />
              <img src="/pen-tool.svg" alt="cacher le mot de passe" className="h-3 w-3 mr-1" />
              Edit
            {/* </Button> */}
            <Button  text="Supprimer" />
              <img src="/bin.svg" alt="cacher le mot de passe" className="h-3 w-3 mr-1" />
              Delete
            {/* </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
