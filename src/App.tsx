import React from 'react';
import { CheckSquare } from 'lucide-react';
import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import { EmptyState } from './components/EmptyState';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    stats,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <CheckSquare size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Todo App
          </h1>
          <p className="text-gray-600">
            Stay organized and productive
          </p>
        </div>

        {/* Todo Form */}
        <TodoForm onAddTodo={addTodo} />

        {/* Filter Controls */}
        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          stats={stats}
          onClearCompleted={clearCompleted}
        />

        {/* Todo List */}
        <div className="mt-6">
          {todos.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            <div className="space-y-3">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer Stats */}
        {stats.total > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            {stats.active === 0 ? (
              <p>🎉 All tasks completed! Great job!</p>
            ) : (
              <p>
                {stats.active} of {stats.total} task{stats.total !== 1 ? 's' : ''} remaining
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
