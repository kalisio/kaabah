groups:
    - docker

users:
    - name: ${user}
      groups: docker
      lock_passwd: true
      sudo: 'ALL=(ALL) NOPASSWD: ALL'
      shell: /bin/bash
      ssh_authorized_keys:
        - '${ssh_pubkey}'

apt:
    preserve_sources_list: true
    sources:
        glusterfs:
            source: "ppa:gluster/glusterfs-7"
        # docker is now installed through runcmd since apt module often fails fetching repository gpg key
        # docker:
        #     source: "deb https://download.docker.com/linux/ubuntu $RELEASE stable"
        #     keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88

packages:
    - fail2ban
    - glusterfs-server
    - rclone
    - jq
    # see comment in apt module wrt. docker
    # - [docker-ce, ${docker_version}]

snap:
    commands:
        - [ 'install', 'yq' ]

runcmd:
    # Install docker: see comment in apt module wrt. docker
    - 'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -'
    - 'echo "deb https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list'
    - [ apt-get, update, -y]
    - [ apt-get, install, -y, docker-ce=${docker_version}]
