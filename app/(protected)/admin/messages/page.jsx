"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Messages() {
  // Sample message data
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      subject: "Collaboration Opportunity",
      message:
        "Hi, I'm interested in discussing potential collaboration opportunities for a new project.",
      status: "pending",
      timestamp: "2025-02-25T10:30:00Z",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Portfolio Feedback",
      message:
        "I love your portfolio! Could you share some insights on your design process?",
      status: "replied",
      timestamp: "2025-02-24T15:45:00Z",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      subject: "Project Inquiry",
      message:
        "Do you take freelance projects? I have a web app idea I'd like to discuss.",
      status: "pending",
      timestamp: "2025-02-23T09:15:00Z",
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);

  // Handle reply action (for demo purposes)
  const handleReply = (id) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, status: "replied" } : msg
      )
    );
    setSelectedMessage(null);
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Messages</h1>
          <p className="text-secondary-text mt-2">
            Manage your incoming inquiries and communications
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2 bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              Inbox ({messages.filter((m) => m.status === "pending").length}{" "}
              unread)
            </h2>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedMessage?.id === message.id
                      ? "bg-accent-text/20"
                      : "bg-primary-bg/30 hover:bg-primary-bg/50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-primary-text font-medium">
                        {message.name}{" "}
                        <span className="text-secondary-text text-sm">
                          • {message.email}
                        </span>
                      </p>
                      <p className="text-secondary-text text-sm truncate max-w-[400px]">
                        {message.subject}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-secondary-text text-sm">
                        {new Date(message.timestamp).toLocaleDateString()}
                      </span>
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          message.status === "pending"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {message.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Details */}
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            {selectedMessage ? (
              <>
                <h2 className="text-xl font-semibold text-primary-text mb-4">
                  Message Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-secondary-text text-sm">From:</p>
                    <p className="text-primary-text font-medium">
                      {selectedMessage.name} ({selectedMessage.email})
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary-text text-sm">Subject:</p>
                    <p className="text-primary-text">
                      {selectedMessage.subject}
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary-text text-sm">Message:</p>
                    <p className="text-primary-text bg-primary-bg/30 p-4 rounded-lg">
                      {selectedMessage.message}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleReply(selectedMessage.id)}
                      className="px-4 py-2 bg-accent-text text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Mark as Replied
                    </button>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="px-4 py-2 bg-gray-500/10 text-primary-text rounded-lg hover:bg-gray-500/20 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-secondary-text">
                Select a message to view details
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/messages/new"
              className="bg-primary-bg/30 p-4 rounded-lg hover:bg-primary-bg/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent-text/10 rounded-lg">
                  <span className="text-accent-text text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-primary-text font-semibold">
                    Compose New
                  </h3>
                  <p className="text-secondary-text text-sm">
                    Send a message to a contact
                  </p>
                </div>
              </div>
            </Link>
            <button className="bg-primary-bg/30 p-4 rounded-lg hover:bg-primary-bg/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <span className="text-red-500 text-xl">🗑️</span>
                </div>
                <div>
                  <h3 className="text-primary-text font-semibold">
                    Clear Inbox
                  </h3>
                  <p className="text-secondary-text text-sm">
                    Archive all messages
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
    </div>
  );
}
