cmake_minimum_required(VERSION 3.5.1)

project(test)

# file(GLOB_RECURSE h_src ${CMAKE_CURRENT_SOURCE_DIR}/*.hpp ${CMAKE_CURRENT_SOURCE_DIR}/*.h)
# file(GLOB_RECURSE c_src ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp ${CMAKE_CURRENT_SOURCE_DIR}/*.c)

set(exedir ${CMAKE_CURRENT_SOURCE_DIR})

#file(GLOB_RECURSE h_src ${exedir}/*.hpp ${exedir}/*.h)
#file(GLOB_RECURSE c_src ${exedir}/*.cpp ${exedir}/*.c)


include_directories(D:/code/devc++/graph/thirdparty)
#h.
link_directories(D:/code/devc++/graph/thirdparty/build/Debug)'
#lib dll

#add_definitions(-DLLGL_ENABLE_UTILITY)
# macro


add_executable(main main.cpp ${h_src} ${c_src})

#target_link_libraries(main PRIVATE LLGLD LLGL_VulkanD)
#libname
