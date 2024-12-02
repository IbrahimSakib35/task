'use client'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { loadUser } from '../features/authSlice'
import AdminDashboard from '../../components/AdminDashboard'
import TrainerDashboard from '../../components/TrainerDashboard'
import TraineeDashboard from '../../components/TraineeDashboard'

export default function Dashboard() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push('/login')
    } else if (isAuthenticated && !user) {
      dispatch(loadUser())
    }
  }, [isAuthenticated, loading, user, dispatch, router])

  if (loading || !user) {
    return <div>Loading...</div>
  }

  switch (user.role) {
    case 'admin':
      return <AdminDashboard />
    case 'trainer':
      return <TrainerDashboard />
    case 'trainee':
      return <TraineeDashboard />
    default:
      return <div>Invalid user role</div>
  }
}

