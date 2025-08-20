import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import { Button } from '../../atoms/Button';
import { Badge } from '../../atoms/Badge';

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
  disabled?: boolean;
}

export interface UserMenu {
  name: string;
  email: string;
  avatar?: string;
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

export interface NavigationProps {
  logo?: React.ReactNode;
  title?: string;
  items: NavigationItem[];
  userMenu?: UserMenu;
  onLogout?: () => void;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  logo,
  title,
  items,
  userMenu,
  onLogout,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        'bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            {logo && <div className="flex-shrink-0 mr-4">{logo}</div>}
            {title && (
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h1>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  item.active
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
                  item.disabled && 'opacity-50 cursor-not-allowed'
                )}
                onClick={(e) => item.disabled && e.preventDefault()}
              >
                <span className="flex items-center">
                  {item.label}
                  {item.badge && (
                    <Badge variant="primary" size="sm" className="ml-2">
                      {item.badge}
                    </Badge>
                  )}
                </span>
              </a>
            ))}
          </div>

          {/* User Menu */}
          {userMenu && (
            <div className="hidden md:flex md:items-center md:ml-6">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2"
                >
                  {userMenu.avatar ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={userMenu.avatar}
                      alt={userMenu.name}
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {userMenu.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {userMenu.name}
                  </span>
                </Button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {userMenu.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {userMenu.email}
                      </p>
                    </div>
                    {userMenu.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item.icon && <span className="mr-3">{item.icon}</span>}
                        {item.label}
                      </a>
                    ))}
                    {onLogout && (
                      <button
                        onClick={onLogout}
                        className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Sign out
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  item.active
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700',
                  item.disabled && 'opacity-50 cursor-not-allowed'
                )}
                onClick={(e) => item.disabled && e.preventDefault()}
              >
                <span className="flex items-center">
                  {item.label}
                  {item.badge && (
                    <Badge variant="primary" size="sm" className="ml-2">
                      {item.badge}
                    </Badge>
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
